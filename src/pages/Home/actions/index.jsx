import { api } from '../../../Infra/axios';

export const getAlbuns = async () => {
  try {
    const resposta = await api.get('/metallica');

    return resposta;
  } catch (error) {}
};
