import { api } from '../../../Infra/axios';
import { useDiscografiaStore } from '../../Discografia/Store';
import { useMemberStore } from '../../Integrantes/Store';

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

export const getMembers = async () => {
  try {
    useMemberStore.setState({
      loaderMembers: true,
      errorMembers: false,
    });
    const respostaMembers = await api.get('/metallica/members');
    useMemberStore.setState({
      members: respostaMembers.data.members,
      loaderMembers: false,
      errorMembers: false,
    });
  } catch (error) {
    useMemberStore.setState({
      errorMembers: true,
      loaderMembers: false,
    });
  }
};
