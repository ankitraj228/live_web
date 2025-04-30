const TechnologyCard = ({ name, img }) => (
    <div className="bg-white rounded-lg shadow p-4 text-center hover:scale-105 transition">
      <img src={img} alt={name} className="h-20 mx-auto mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
  export default TechnologyCard;
  