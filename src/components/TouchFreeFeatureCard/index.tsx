type TouchFreeFeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const TouchFreeFeatureCard = ({
  icon,
  title,
  description,
}: TouchFreeFeatureCardProps) => {
  return (
    <div className="content-stores">
      <div className="icon-card">
        <img src={icon} alt={title} className="offlineImage" />
      </div>

      <div className="icon-card-header">
        <h2 className="icon-header">{title}</h2>
        <p className="icon-header-content">{description}</p>
      </div>
    </div>
  );
};

export default TouchFreeFeatureCard;
