import { useRouter } from 'next/router';
import Image from 'next/image';

const photo = ({ photo }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div>
      <h1>Товар: {photo.title}</h1>
      <p>{photo.description}</p>
      <Image 
        src={photo.url}
        alt={photo.title} 
        width={300} 
        height={300} 
        priority 
      />
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await response.json();

  const paths = photos.map((photo) => ({
    params: { id: photo.id.toString() },
  }));

  return { 
    paths, 
    fallback: true 
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
  const photo = await response.json();
  photo.url = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg"

  return {
    props: { photo },
    revalidate: 10, 
  };
}

export default photo;
