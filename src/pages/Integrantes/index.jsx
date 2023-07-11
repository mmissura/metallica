import { useLocation } from 'react-router-dom';
import james1 from '../../assets/Images/james1.png';

export const Integrantes = () => {
  const { state } = useLocation();

  return (
    <section className="p-12 bg-white">
      <h1 className="text-4xl text-center mb-8 font-bold">{state.name}</h1>
      <div className="xl:grid xl:grid-col-2 xl:grid-flow-col lg:grid lg:grid-col-2 lg:grid-flow-col gap-12">
        <img
          className="border w-100 border-gray-500 shadow-md mb-5"
          src={james1}
          alt=""
        />

        <div className="col-span-2 xl:mt-0 lg:mt-0 mt-8 m-8">
          {state.biografia.map((bio) => (
            <p className="m-4" key={bio}>
              {bio}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
