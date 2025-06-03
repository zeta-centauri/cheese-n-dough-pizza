import { makeAutoObservable, runInAction } from 'mobx';
import { RegisterPayloadType } from '../shared/api/endpoints/auth/endpoints/register';
import { authEndpoints } from '../shared/api';
import { LoginPayloadType } from '../shared/api/endpoints/auth/endpoints/login';

class LoginStore {
    user: User | null = null;
    isLoading = false;
    error: string | null = null;

    currentMode: Mode = 'login';

    constructor() {
        makeAutoObservable(this);
        this.initializeAuth();
    }

    changeMode = () => {
        if (this.currentMode === 'login') {
            this.currentMode = 'register';
        } else {
            this.currentMode = 'login';
        }
    };

    async initializeAuth() {
        runInAction(() => {
            this.isLoading = true;
        });

        try {
            const userData = localStorage.getItem('user');
            if (userData) {
                const parsedData = JSON.parse(userData);
                const authData = await authEndpoints.checkAuth();

                console.log(authData);

                if (authData.success) {
                    this.setUser(parsedData);
                } else {
                    localStorage.removeItem('user');
                }
            }
        } catch (error) {
            console.error('Auth initialization error:', error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    setUser(userData: User | null) {
        this.user = userData;
        if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
        } else {
            localStorage.removeItem('user');
        }
    }

    register = async ({ email, username, password }: RegisterPayloadType) => {
        this.isLoading = true;
        try {
            const data = await authEndpoints.register({
                email,
                username,
                password,
            });
            if (data.success) {
                const userData = {
                    id: data.userId,
                    username: data.username,
                    email: data.email,
                };
                this.setUser(userData);
            }
            return data;
        } catch (error: unknown) {
            runInAction(() => {
                if (error instanceof Error) {
                    this.error = error.message;
                } else {
                    this.error = 'An unknown error occurred';
                }
            });
            throw error;
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };

    login = async ({ email, password }: LoginPayloadType) => {
        this.isLoading = true;
        try {
            const data = await authEndpoints.login({
                email,
                password,
            });
            if (data.success) {
                const userData = {
                    id: data.userId,
                    username: data.username,
                    email: data.email,
                };
                this.setUser(userData);
            }
            return data;
        } catch (error: unknown) {
            runInAction(() => {
                if (error instanceof Error) {
                    this.error = error.message;
                } else {
                    this.error = 'An unknown error occurred';
                }
            });
            throw error;
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };

    logout = async () => {
        this.isLoading = true;
        try {
            const data = await authEndpoints.logout();
            if (data.success) {
                this.setUser(null);
                localStorage.removeItem('user');
            }
            return data;
        } catch (error: unknown) {
            runInAction(() => {
                if (error instanceof Error) {
                    this.error = error.message;
                } else {
                    this.error = 'An unknown error occurred';
                }
            });
            throw error;
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };
}

export default new LoginStore();

type Mode = 'login' | 'register';

type User = {
    id: number;
    username: string;
    email: string;
};
