import { api } from '../../../Infra/axios';

export const getAlbuns = async () => {
  try {
    const resposta = await api.get('/metallica');

    return resposta;
  } catch (error) {}
};

export const getMembers = async () => {
  try {
    const resposta = await api.get('/metallica/members');

    return resposta;
  } catch (error) {}
};
