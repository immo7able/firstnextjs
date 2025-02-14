import { useRouter } from 'next/router';
import Image from 'next/image';
import users from '../../data/users.json';
import Link from 'next/link';
import '../../app/globals.css';


const UserDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const user = users.find((user) => user.id.toString() === id);

    if (!user) {
        return <h1 className="text-center text-xl mt-10">Пользователь не найден</h1>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <Image
                    src={user.avatar}
                    alt={user.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                />
                <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
                <p className="text-gray-500">{user.email}</p>
                <Link href="/users">
                    <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        Назад
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UserDetail;
