import React, { useEffect, useState, useRef } from "react";
import backGround from "../../assets/background.jpg";
import ball from "../../assets/ball.png";
import block from "../../assets/block.png";
import ground from "../../assets/ground.png";
import "./BouncingGame.css";

function BouncingGame() {
  const GRAVITY = 0.6;
  const JUMP_STRENGTH = -14;
  const BALL_SIZE = 30;
  const GROUND_HEIGHT = 600 - 22;
  const OBSTACLE_SIZE = 70;
  const MIN_GAP = 10; // Minimum gap between obstacles

  const [ballY, setBallY] = useState(GROUND_HEIGHT - BALL_SIZE);
  const [ballX, setBallX] = useState(50);
  const [ballVelocity, setBallVelocity] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [backgroundX, setBackgroundX] = useState(0);
  const [groundX, setGroundX] = useState(0);
  const [ballRotation, setBallRotation] = useState(0);
  const [ballSpeed, setSpeed] = useState(5);
  const [isJumping, setIsJumping] = useState(false);
  const [lastObstacleX, setLastObstacleX] = useState(0);
  const [tapToPlay, setTapToPlay] = useState(true);

  const gameAreaRef = useRef(null);

  // Function to check if new obstacle can be spawned
  const canSpawnObstacle = () => {
    return lastObstacleX === 0 || lastObstacleX < 300; // Decrease the limit for closer obstacles
  };

  useEffect(() => {
    const handleScroll = () => {
      setTapToPlay(false);
    };

    if (tapToPlay) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tapToPlay]);
  // Modified random obstacle generation
  useEffect(() => {
    let spawnInterval;
    const MIN_TIME_BETWEEN_OBSTACLES = 1200;
    let lastObstacleSpawnTime = Date.now();

    const trySpawnObstacle = () => {
      if (!gameOver) {
        const currentTime = Date.now();

        if (
          canSpawnObstacle() &&
          Math.random() < 0.6 &&
          currentTime - lastObstacleSpawnTime >= MIN_TIME_BETWEEN_OBSTACLES
        ) {
          const newObstacle = {
            x: 800,
            passed: false,
          };
          setObstacles((prev) => [...prev, newObstacle]);
          lastObstacleSpawnTime = currentTime;
        }
        spawnInterval = setTimeout(trySpawnObstacle, 300);
      }
    };
    // Initial spawn check
    spawnInterval = setTimeout(trySpawnObstacle, 300);
    return () => {
      if (spawnInterval) {
        clearTimeout(spawnInterval);
      }
    };
  }, [gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const speedIncreaseInterval = setInterval(() => {
        setSpeed((prevValue) => prevValue + 0.02);
      }, 100);
      return () => clearInterval(speedIncreaseInterval);
    }
  }, [gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const rotationInterval = setInterval(() => {
        setBallRotation(
          (prev) =>
            (prev + (ballVelocity < 0 ? ballSpeed * 2 : ballSpeed * 4)) % 360,
        );
      }, 20);

      return () => clearInterval(rotationInterval);
    }
  }, [gameOver, ballSpeed, ballVelocity]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === " " &&
        !gameOver &&
        !isJumping &&
        ballY + BALL_SIZE >= GROUND_HEIGHT
      ) {
        jump();
      }
    };

    const handleTap = () => {
      if (!gameOver && !isJumping && ballY + BALL_SIZE >= GROUND_HEIGHT - 10) {
        jump();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (gameAreaRef.current) {
      gameAreaRef.current.addEventListener("click", handleTap);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (gameAreaRef.current) {
        gameAreaRef.current.removeEventListener("click", handleTap);
      }
    };
  }, [gameOver, isJumping, ballY]);

  useEffect(() => {
    if (!gameOver) {
      const scrollInterval = setInterval(() => {
        setGroundX((prev) => (prev - ballSpeed) % 600);
        setBackgroundX((prev) => (prev - ballSpeed * 0.5) % 600);
      }, 20);

      return () => clearInterval(scrollInterval);
    }
  }, [gameOver, ballSpeed]);

  const updateGame = () => {
    setBallY((prevY) => {
      const newY = prevY + ballVelocity;

      if (newY + BALL_SIZE >= GROUND_HEIGHT - 10) {
        setIsJumping(false);
        return GROUND_HEIGHT - BALL_SIZE - 10;
      }
      return newY;
    });

    setBallVelocity((prevVelocity) => prevVelocity + GRAVITY);

    setObstacles((prevObstacles) => {
      return prevObstacles.map((obstacle) => {
        const newX = obstacle.x - ballSpeed;

        if (newX + OBSTACLE_SIZE < ballX && !obstacle.passed) {
          setScore((prevScore) => prevScore + 1);
          return { ...obstacle, x: newX, passed: true };
        }
        return { ...obstacle, x: newX };
      });
    });

    // Update lastObstacleX
    if (obstacles.length > 0) {
      setLastObstacleX(obstacles[obstacles.length - 1].x);
    }

    setObstacles((prevObstacles) =>
      prevObstacles.filter((obstacle) => obstacle.x + OBSTACLE_SIZE > 0),
    );

    obstacles.forEach((obstacle) => {
      if (
        ballX + BALL_SIZE >= obstacle.x &&
        ballX < obstacle.x + OBSTACLE_SIZE &&
        ballY + BALL_SIZE >= GROUND_HEIGHT - OBSTACLE_SIZE
      ) {
        setGameOver(true);
      }
    });
  };

  useEffect(() => {
    if (!gameOver) {
      const gameInterval = setInterval(() => {
        updateGame();
      }, 20);

      return () => clearInterval(gameInterval);
    }
  }, [ballY, obstacles, gameOver]);

  const jump = () => {
    setBallVelocity(JUMP_STRENGTH);
    setIsJumping(true);
  };

  // Reset function
  const resetGame = () => {
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    setBallY(GROUND_HEIGHT - BALL_SIZE);
    setBallX(50);
    setBallVelocity(0);
    setBackgroundX(0);
    setGroundX(0);
    setBallRotation(0);
    setSpeed(8);
    setLastObstacleX(0);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        fontFamily: "'Pixelify Sans', sans-serif", // Add the font here
      }}
      className="max-sm:scale-75"
    >
      {/* Tap to Play Overlay */}
      {tapToPlay && (
        <div
          className="mobile-only sm:hidden"
          onClick={() => {
            setTapToPlay(false);
            if (gameOver) {
              resetGame();
            }
          }}
        >
          Tap to Play
        </div>
      )}
      <div
        style={{
          width: "800px",
          height: "600px",
          overflow: "hidden",
          position: "relative",
        }}
        className="max-sm:scale-y-100 max-sm:mt-5"
      >
        <div
          ref={gameAreaRef}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          onClick={() => {
            if (gameOver) {
              resetGame();
            }
          }}
        >
          {/* Scrolling Background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: backgroundX,
              width: "1900px",
              height: "100%",
              backgroundImage: `url(${backGround})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "600px 100%",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: backgroundX + 1070,
              width: "100px",
              height: "100%",
              zIndex: 0,
              backgroundImage: `url(${backGround})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "600px 100%",
            }}
          />
          {/* Ball */}
          <div
            style={{
              position: "absolute",
              left: ballX,
              top: ballY - 10,
              width: BALL_SIZE,
              height: BALL_SIZE,
              backgroundImage: `url(${ball})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              borderRadius: "50%",
              zIndex: 2,
              transform: `rotate(${ballRotation}deg)`,
              transition: "transform 0.02s linear",
            }}
          />
          {/* Obstacles */}
          {obstacles.map((obstacle, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: obstacle.x,
                bottom: 39,
                width: OBSTACLE_SIZE,
                height: OBSTACLE_SIZE,
                backgroundImage: `url(${block})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                zIndex: 2,
              }}
            />
          ))}
          {/* Scrolling Ground */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: groundX,
              width: "1900px",
              height: "100px",
              backgroundImage: `url(${ground})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "600px 100%",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: groundX,
              width: "200px",
              height: "100px",
              backgroundImage: `url(${ground})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "600px 100%",
              zIndex: 1,
            }}
          />
          {/* Score */}
          <div
            style={{
              position: "absolute",
              top: 29,
              left: 26,
              fontSize: "27px",
              zIndex: 3,
            }}
            className="max-sm:mt-10 max-sm:ml-5"
          >
            Score: {score}
          </div>
          {/* Game Over Message */}
          {gameOver && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "40px",
                color: "red",
                zIndex: 4,
              }}
            >
              Game Over
            </div>
          )}
          {gameOver && (
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "25px",
                color: "red",
                zIndex: 4,
              }}
            >
              Tap to Start
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BouncingGame;
