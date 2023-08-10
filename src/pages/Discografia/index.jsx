import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDiscografiaStore } from '../Discografia/Store';
// import kill from '../../assets/Images/kill.png';
// import ride from '../../assets/Images/ride.png';
// import master from '../../assets/Images/master.png';
// import garage from '../../assets/Images/garage.png';
// import justice from '../../assets/Images/justice.png';
// import black from '../../assets/Images/black.png';
// import shit from '../../assets/Images/shit.png';
// import load from '../../assets/Images/load.png';
// import reload from '../../assets/Images/reload.png';
// import garageinc from '../../assets/Images/garageinc.png';
// import sm from '../../assets/Images/sm.png';
// import stanger from '../../assets/Images/stanger.png';
// import death from '../../assets/Images/death.png';
// import hardwire from '../../assets/Images/hardwire.png';
// import sm2 from '../../assets/Images/sm2.png';
// import season from '../../assets/Images/72.png';

export const Discografia = () => {
  const { albumSelected } = useDiscografiaStore();
  const navigate = useNavigate();

  useEffect(() => {
    !albumSelected && navigate('/');
  }, []);

  return (
    // com o tailwind, inserimos o css diretamente no nome da classe
    <div>
      {albumSelected && (
        <section className="p-12 bg-white">
          <h2 className="text-4xl text-center mb-8 font-bold">
            {albumSelected.name} ({albumSelected.year})
          </h2>
          <div className="xl:grid grid-cols-2 gap-4">
            <img className="w-96" src={albumSelected.image} />
            <div className="font-bold">
              {albumSelected.trackList &&
                albumSelected.trackList.map((track) => (
                  <p key={track}>{track}</p>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
