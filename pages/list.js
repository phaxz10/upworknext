import axios from 'axios';
import Passwordlist from './components/Passwordlist';

const list = ({ pwList }) => {
  console.log(pwList);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='my-10 text-2xl font-medium'>Password List</h1>

      {pwList.map(({ password, created_at }, i) => (
        <Passwordlist password={password} created_at={created_at} />
      ))}
    </div>
  );
};

export default list;

export async function getServerSideProps(context) {
  const pwList = await axios
    .get('http://localhost:3000/api/passwords')
    .then((res) => res.data);

  return {
    props: {
      pwList,
    },
  };
}
