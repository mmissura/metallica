import { api } from '../../../Infra/axios';
import { useDiscografiaStore } from '../../Discografia/Store';

export const getAlbuns = async () => {
  try {
    useDiscografiaStore.setState({
      loaderAlbuns: true,
      errorAlbuns: false,
    });
    const respostaAlbuns = await api.get('/metallica');
    useDiscografiaStore.setState({
      albuns: respostaAlbuns.data.albums,
      loaderAlbuns: false,
      errorAlbuns: false,
    });
  } catch (error) {
    useDiscografiaStore.setState({
      errorAlbuns: true,
      loaderAlbuns: false,
    });
  }
};
