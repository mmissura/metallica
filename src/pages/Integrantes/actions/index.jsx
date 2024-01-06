import { api } from '../../../Infra/axios';
import { useMemberStore } from '../../Integrantes/Store';

export const getMembers = async () => {
  try {
    useMemberStore.setState({
      loaderMembers: true,
      errorMembers: false,
    });
    const respostaMembers = await api.get('/metallica/members');
    useMemberStore.setState({
      members: respostaMembers.data.members,
      exMembers: respostaMembers.data.exMembers,
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
