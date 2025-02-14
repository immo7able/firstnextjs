import Link from 'next/link';
import Image from 'next/image';
import users from '../data/users.json';
import '../app/globals.css';

const Users = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-6">Список пользователей</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {users.map((user) => (
                    <div key={user.id} className="bg-white p-5 shadow-lg rounded-lg text-center">
                        <Image
                            src={user.avatar}
                            alt={user.name}
                            width={100}
                            height={100}
                            className="rounded-full mx-auto mb-3"
                        />
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-gray-500">{user.email}</p>
                        <Link href={`/users/${user.id}`}>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                                Подробнее
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
