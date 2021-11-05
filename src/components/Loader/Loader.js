import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import { Container } from './Loader.styled';
const loaderRoot = document.querySelector('#loader-root');

const Preloader = () => {
  return createPortal(
    <Container>
      <Loader type="Grid" color="#3f7df4" height={80} width={80} />
    </Container>,
    loaderRoot,
  );
};

export default Preloader;
