import { Vortex } from 'react-loader-spinner';

export const Preloader = () => {
  return (
    <div className="mt-24 flex justify-center">
      <Vortex
        visible={true}
        height="250px"
        width="250px"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};
