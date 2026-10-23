import { useEffect, useMemo, useState } from 'react';
import { content } from './data/content';

const locationList = content.locations;

const getStoredPreference = () => {
  if (typeof window === 'undefined') return false;
  const stored = window.localStorage.getItem('music-enabled');
  return stored ? stored === 'true' : false;
};

const storyDetails = [
  { id: 'before', emoji: '🌼', title: 'Before the story' },
  { id: 'feb-mar', emoji: '📖', title: 'February–March' },
  { id: 'little-things', emoji: '💌', title: 'The little things' },
  { id: 'difficult', emoji: '🌧️', title: 'When things became difficult' },
  { id: 'silence', emoji: '🌙', title: '25 June — The silence' },
  { id: 'remains', emoji: '✨', title: 'What remains' },
];

function App() {
  const [hasEnteredWorld, setHasEnteredWorld] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('garden');
  const [visitedLocations, setVisitedLocations] = useState(['garden']);
  const [activeMessage, setActiveMessage] = useState(null);
  const [musicEnabled, setMusicEnabled] = useState(getStoredPreference);
  const [showLetter, setShowLetter] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeMemory, setActiveMemory] = useState(content.memories[0]);
  const [birdMood, setBirdMood] = useState('happy');
  const [turtleMood, setTurtleMood] = useState('calm');
  const [contactVisible, setContactVisible] = useState(content.contact.enabled);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('music-enabled', String(musicEnabled));
    }
  }, [musicEnabled]);

  const openLocation = (locationId) => {
    setSelectedLocation(locationId);
    setVisitedLocations((prev) => (prev.includes(locationId) ? prev : [...prev, locationId]));
  };

  const progressCount = useMemo(() => Math.min(visitedLocations.length, 6), [visitedLocations]);
  const selectedChapter = content.timeline[activeChapter];

  const handleEnterWorld = () => {
    setHasEnteredWorld(true);
  };

  const handleReplayIntro = () => {
    setHasEnteredWorld(false);
    setSelectedLocation('garden');
    setVisitedLocations(['garden']);
  };

  if (!hasEnteredWorld) {
    return (
      <div className="intro-shell">
        <div className="sky-glow" />
        <div className="cloud cloud-one" />
        <div className="cloud cloud-two" />
        <div className="cloud cloud-three" />

        <div className="intro-card">
          <div className="island-scene">
            <div className="tiny-plant plant-one" />
            <div className="tiny-plant plant-two" />
            <div className="tiny-plant plant-three" />
            <div className="door-arch" />
            <div className="floating-budgie" />
            <div className="floating-turtle" />
          </div>

          <div className="intro-copy">
            <p className="eyebrow">Welcome to your world</p>
            <h1>{content.welcomeHeading}</h1>
            <p className="lead">{content.welcomeLine}</p>
            <p className="soft-text">{content.welcomeSub}</p>
            <div className="cta-row">
              <button className="primary-btn" onClick={handleEnterWorld}>{content.introButton}</button>
              <button className="ghost-btn" onClick={handleEnterWorld}>{content.introSkip}</button>
            </div>
            <div className="music-toggle-row">
              <button className="chip-btn" onClick={() => setMusicEnabled((prev) => !prev)}>
                {musicEnabled ? 'Music on' : 'Music off'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">✦</span>
          <div>
            <p className="brand-label">Bachha's little universe</p>
            <small>{content.title}</small>
          </div>
        </div>

        <div className="toolbar">
          <button className="chip-btn" onClick={() => setMusicEnabled((prev) => !prev)}>
            {musicEnabled ? '🔊 Music On' : '🔇 Music Off'}
          </button>
          <button className="chip-btn" onClick={handleReplayIntro}>Replay intro</button>
        </div>
      </header>

      <main className="world-view">
        <aside className="map-panel">
          <div className="map-header">
            <p className="eyebrow">Explore freely</p>
            <h2>{content.mapProgressLabel}: {progressCount} of 6</h2>
          </div>

          <div className="map-scene">
            <div className="map-bg" />
            <button className={`map-node node-garden ${selectedLocation === 'garden' ? 'active' : ''}`} onClick={() => openLocation('garden')}>
              <span>Garden</span>
            </button>
            <button className={`map-node node-friends ${selectedLocation === 'friends' ? 'active' : ''}`} onClick={() => openLocation('friends')}>
              <span>Friends</span>
            </button>
            <button className={`map-node node-memory ${selectedLocation === 'memory' ? 'active' : ''}`} onClick={() => openLocation('memory')}>
              <span>Memory</span>
            </button>
            <button className={`map-node node-story ${selectedLocation === 'story' ? 'active' : ''}`} onClick={() => openLocation('story')}>
              <span>Story</span>
            </button>
            <button className={`map-node node-letter ${selectedLocation === 'letter' ? 'active' : ''}`} onClick={() => openLocation('letter')}>
              <span>Letter</span>
            </button>
            <button className={`map-node node-final ${selectedLocation === 'final' ? 'active' : ''}`} onClick={() => openLocation('final')}>
              <span>Final</span>
            </button>
          </div>
        </aside>

        <section className="location-panel">
          <div className="location-header">
            <p>{locationList.find((location) => location.id === selectedLocation)?.label}</p>
            <button className="ghost-btn subtle" onClick={() => setSelectedLocation('garden')}>Back to map</button>
          </div>

          {selectedLocation === 'garden' && (
            <div className="location-content garden-view">
              <div className="garden-visual">
                <div className="sun-core" />
                {content.gardenMessages.map((message, index) => (
                  <button
                    key={message}
                    className={`garden-object garden-${index + 1}`}
                    onClick={() => setActiveMessage(message)}
                    aria-label="Open a warm message"
                  >
                    {index % 2 === 0 ? '✦' : '❀'}
                  </button>
                ))}
              </div>

              <div className="card-grid">
                <div className="info-card large">
                  <h3>Welcome Garden</h3>
                  <p>Little moments, soft light, and a quiet place to simply be.</p>
                  <button className="primary-btn small" onClick={() => setActiveMessage(content.gardenMessages[0])}>Open a note</button>
                </div>
              </div>

              {activeMessage && (
                <div className="message-popup" onClick={() => setActiveMessage(null)}>
                  <div className="message-box" onClick={(event) => event.stopPropagation()}>
                    <button className="close-btn" onClick={() => setActiveMessage(null)}>×</button>
                    <div className="paper-badge">Little note</div>
                    <p>{activeMessage}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedLocation === 'friends' && (
            <div className="location-content friends-view">
              <div className="pet-scene">
                <div className="branch branch-one" />
                <div className="branch branch-two" />
                <button
                  className={`pet budgie ${birdMood}`}
                  onClick={() => setBirdMood((prev) => (prev === 'happy' ? 'excited' : 'happy'))}
                  aria-label="Tap the budgie"
                >
                  <span className="pet-name">{content.petConfig.budgieName}</span>
                  <span className="pet-body" />
                </button>

                <button
                  className={`pet turtle ${turtleMood}`}
                  onClick={() => {
                    setTurtleMood((prev) => (prev === 'calm' ? 'moving' : 'calm'));
                    setActiveMessage('A tiny step, a steady rhythm, and a quiet little world to wander through.');
                  }}
                  aria-label="Tap the turtle"
                >
                  <span className="pet-name">{content.petConfig.turtleName}</span>
                  <span className="pet-shell" />
                </button>
              </div>

              <div className="card-grid two-up">
                <div className="info-card">
                  <h3>Budgie</h3>
                  <p>Flaps gently, tilts its head, and keeps a little sparkle in the corner of the room.</p>
                  <button className="primary-btn small" onClick={() => setBirdMood('excited')}>Let it hop</button>
                </div>
                <div className="info-card">
                  <h3>Turtle</h3>
                  <p>Slow, cheerful, and always reaching for a little flower or a calm pond edge.</p>
                  <button className="primary-btn small" onClick={() => setTurtleMood('moving')}>Guide the turtle</button>
                </div>
              </div>

              {activeMessage && (
                <div className="message-popup" onClick={() => setActiveMessage(null)}>
                  <div className="message-box small" onClick={(event) => event.stopPropagation()}>
                    <button className="close-btn" onClick={() => setActiveMessage(null)}>×</button>
                    <p>{activeMessage}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedLocation === 'memory' && (
            <div className="location-content memory-view">
              <div className="memory-tree-visual">
                <div className="memory-tree" />
                {content.memories.map((memory) => (
                  <button
                    key={memory.id}
                    className={`memory-leaf ${activeMemory.id === memory.id ? 'selected' : ''}`}
                    style={{ left: `${((memory.id - 1) * 22) % 78 + 10}%`, top: `${(memory.id * 18) % 65 + 15}%` }}
                    onClick={() => setActiveMemory(memory)}
                    aria-label={`Open memory ${memory.title}`}
                  >
                    ✦
                  </button>
                ))}
              </div>

              <div className="memory-card info-card">
                <p className="paper-badge">{activeMemory.category}</p>
                <h3>{activeMemory.title}</h3>
                <p className="date-label">{activeMemory.date}</p>
                <p>{activeMemory.description}</p>
              </div>
            </div>
          )}

          {selectedLocation === 'story' && (
            <div className="location-content story-view">
              <div className="timeline-sidebar">
                {storyDetails.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    className={`chapter-tab ${activeChapter === index ? 'selected' : ''}`}
                    onClick={() => setActiveChapter(index)}
                  >
                    <span>{chapter.emoji}</span>
                    {chapter.title}
                  </button>
                ))}
              </div>

              <div className="story-card info-card">
                <p className="paper-badge">Storybook path</p>
                <h3>{selectedChapter.title}</h3>
                <p>{selectedChapter.text}</p>
              </div>
            </div>
          )}

          {selectedLocation === 'letter' && (
            <div className="location-content letter-view">
              <div className="house-scene">
                <div className="house-window" />
                <button className="letter-envelope" onClick={() => setShowLetter(true)}>
                  <span>For Bachha.</span>
                </button>
              </div>

              <div className="info-card">
                <h3>Little Letter House</h3>
                <p>A quiet room with a warm lamp, soft paper, and a message waiting for the right moment.</p>
              </div>

              {showLetter && (
                <div className="letter-overlay" onClick={() => setShowLetter(false)}>
                  <div className="letter-sheet" onClick={(event) => event.stopPropagation()}>
                    <button className="close-btn" onClick={() => setShowLetter(false)}>×</button>
                    <h3>{content.letter.title}</h3>
                    <div className="letter-body">
                      {content.letter.content.split('\n').map((line, index) => (
                        <p key={`${line}-${index}`}>{line || ' '}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedLocation === 'final' && (
            <div className="location-content final-view">
              <div className="night-sky">
                <div className="moon" />
                <div className="star star-one" />
                <div className="star star-two" />
                <div className="star star-three" />
                <div className="budgie-rest" />
                <div className="turtle-rest" />
              </div>

              <div className="final-card info-card">
                <p className="quote">“{content.final.quote}”</p>
                <p>{content.final.caption}</p>

                <div className="final-interaction">
                  <h4>{content.final.prompt}</h4>
                  <p>{content.final.promptText}</p>
                  {contactVisible && (
                    <a href={content.contact.link} className="primary-btn small" target="_blank" rel="noreferrer">
                      {content.contact.label}
                    </a>
                  )}
                  <button className="primary-btn small" onClick={() => setContactVisible((prev) => !prev)}>
                    {contactVisible ? 'Disable contact door' : 'Leave a door open'}
                  </button>
                </div>

                <p className="closing-line">{content.final.exitMessage}</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
