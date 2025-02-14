import { useEffect } from 'react';

export default function Task40() {
    useEffect(() => {
        fetchUserData().then(console.log);
    }, []);

    return (
        <div>
            <p>Загрузка данных...</p>
        </div>
    );
}

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        const { name, email } = data;
        return { name, email };
    } catch (error) {
        console.error(error.message);
        return 'Ошибка загрузки данных';
    }
}
