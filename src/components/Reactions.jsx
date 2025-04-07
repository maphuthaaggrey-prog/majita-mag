import { useState, useEffect } from "react";

const Reactions = ({ slug }) => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [reactions, setReactions] = useState({
    love: 0,
    like: 0,
    dislike: 0,
  });

  useEffect(() => {
    // Load saved reactions for the specific story
    const savedReaction = localStorage.getItem(`userReaction_${slug}`);
    const savedCounts = localStorage.getItem(`reactionCounts_${slug}`);

    if (savedReaction) {
      setSelectedReaction(savedReaction);
    }

    if (savedCounts) {
      setReactions(JSON.parse(savedCounts));
    }
  }, [slug]);

  const handleReaction = (type) => {
    let updatedReactions = { ...reactions };

    if (selectedReaction === type) {
      updatedReactions[type] -= 1;
      setSelectedReaction(null);
      localStorage.removeItem(`userReaction_${slug}`);
    } else {
      if (selectedReaction) {
        updatedReactions[selectedReaction] -= 1;
      }
      updatedReactions[type] += 1;
      setSelectedReaction(type);
      localStorage.setItem(`userReaction_${slug}`, type);
    }

    setReactions(updatedReactions);
    localStorage.setItem(`reactionCounts_${slug}`, JSON.stringify(updatedReactions));
  };

  return (
    <div className="reactions-container">
      <h2>React to this story!</h2>
      <div className="buttons">
        <button
          onClick={() => handleReaction("love")}
          className={`love ${selectedReaction === "love" ? "active" : ""}`}
        >
          ❤️ Love ({reactions.love})
        </button>
        <button
          onClick={() => handleReaction("like")}
          className={`like ${selectedReaction === "like" ? "active" : ""}`}
        >
          👍 Like ({reactions.like})
        </button>
        <button
          onClick={() => handleReaction("dislike")}
          className={`dislike ${selectedReaction === "dislike" ? "active" : ""}`}
        >
          👎 Dislike ({reactions.dislike})
        </button>
      </div>
    </div>
  );
};

export default Reactions;
