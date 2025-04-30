const ArticleCard = ({ title, summary }) => (
    <div className="bg-white p-4 rounded shadow hover:bg-gray-50 transition">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p>{summary}</p>
    </div>
  );
  export default ArticleCard;
  