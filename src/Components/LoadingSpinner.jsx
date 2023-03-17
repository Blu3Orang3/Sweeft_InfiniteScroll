import { Bars } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <>
    <Bars
      wrapperClass="loader"
      height='80'
      width='80'
      color='#4fa94d'
      ariaLabel='bars-loading'
      wrapperStyle={{}}
      visible={true}
    />
    </>
  );
};

export default LoadingSpinner;
