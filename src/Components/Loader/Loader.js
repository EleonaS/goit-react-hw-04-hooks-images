import LoaderSpinner from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

//<LoaderSpinner type="ThreeDots" color="pink" height={100} width={100} timeout={10000} />

const Loader = () => (
  <Wrapper>
    <LoaderSpinner
      type="Circles"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={10000}
    />
  </Wrapper>
);

export { Loader };
