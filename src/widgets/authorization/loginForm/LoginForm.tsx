import styled from 'styled-components';
import { useForm } from 'react-hook-Form';
import { colors } from '../../../styles/colors';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';
import loginStore from '../../../stores/login-store';

interface ILoginFormData {
    email: string;
    password: string;
}

const LoginForm = observer(() => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<ILoginFormData>({
        mode: 'onChange', // Проверка валидности формы в режиме onChange
    });

    const login = loginStore.login;

    const navigate = useNavigate();

    const onSubmit = async ({ email, password }: ILoginFormData) => {
        try {
            await login({ email, password });
            navigate('/');
        } catch (error) {
            console.log('error');
        }
    };
    return (
        <Wrapper>
            <FormTitle>Вход на сайт</FormTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputWrapper>
                    <Label htmlFor="email">Электронная почта</Label>
                    <InputStyled
                        id="email"
                        type="email"
                        {...register('email', {
                            required: 'Заполните обязательные поля!',
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor="password">Пароль</Label>
                    <InputStyled
                        id="password"
                        type="password"
                        {...register('password', {
                            required: 'Заполните обязательные поля!',
                        })}
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </InputWrapper>

                {/* Submit Button */}
                <SubmitButton type="submit" disabled={!isValid}>
                    Войти
                </SubmitButton>
            </Form>
        </Wrapper>
    );
});

export default LoginForm;

const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 36px;
`;
const FormTitle = styled.h2`
    font-weight: 400;
    font-size: 32px;
    line-height: 62%;
`;

const Label = styled.label`
    cursor: auto;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: ${colors.fontGray};
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const InputStyled = styled.input`
    border: 0.3px solid #808080;
    border-radius: 8px;
    padding: 12px;
    min-width: 340px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
`;

const SubmitButton = styled.button`
    padding: 16px 16px;

    background-color: ${colors.primary};
    color: white;
    border: 0;
    border-radius: 8px;

    &:hover {
        background-color: #ca6212;
    }

    &:disabled {
        cursor: not-allowed;
        color: ${colors.fontGray};
        background-color: ${colors.bgGray};
    }
`;
