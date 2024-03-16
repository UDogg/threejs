import React from 'react';

const phrases = [
  "Check",
  "out",
  "my",
  "GitHub",
  "profile",
  "for",
  "more",
  "exciting",
  "projects!",
];

const githubProfileUrl = "https://github.com/UDogg"; // Your GitHub profile URL

const PhraseConveyor = () => {
  return (
    <div className="overflow-hidden relative w-full h-10">
      <a
        href={githubProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-conveyor whitespace-nowrap block"
      >
        {phrases.map((phrase, index) => (
          // Use `React.Fragment` to avoid adding unnecessary wrappers that might break the layout
          // `key` is necessary but React.Fragment doesn't add actual DOM elements
          <React.Fragment key={index}>
            <span className="mx-4 inline-block">{phrase}</span>
          </React.Fragment>
        ))}
      </a>
    </div>
  );
};

export default PhraseConveyor;
