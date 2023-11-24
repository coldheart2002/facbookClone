interface Props {
  bgColor: string;
  name: string;
}

function CreateStory({ bgColor, name }: Props) {
  return (
    <>
      <div
        className="othersStoryContainer"
        style={{ backgroundColor: bgColor }}
      >
        <div className="stroryProfile"></div>
        <div className="storyImg"></div>
        <div className="storyProfileName">{name}</div>
      </div>
    </>
  );
}

export default CreateStory;
