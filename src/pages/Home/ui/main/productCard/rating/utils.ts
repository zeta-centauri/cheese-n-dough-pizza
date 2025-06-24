export const getRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push('full');
        } else if (rating > i - 1) {
            stars.push('half');
        } else {
            stars.push('empty');
        }
    }
    return stars;
};
