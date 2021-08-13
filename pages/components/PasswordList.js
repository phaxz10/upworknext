import moment from 'moment';

const passwordlist = ({ password, created_at }) => {
  return (
    <div className='grid grid-cols-2 place-items-center'>
      <p>
        Password{': '}
        {password}
      </p>
      <p>
        Created at{': '}
        {moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}
      </p>
    </div>
  );
};

export default passwordlist;
