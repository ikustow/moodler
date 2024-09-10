import axios from 'axios';

export const sendMoodToBackend = async (userId: number, mood: string) => {
    try {
        const response = await axios.post('https://your-backend-api.com/mood', {
            userId: userId,
            mood: mood
        });
        return response.status === 200;
    } catch (error) {
        console.error('Ошибка при отправке настроения:', error);
        return false;
    }
};
