import React from "react";

const HistoricProjects = () => {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="text-5xl font-semibold uppercase">MORE PROJECTS</div>
      <hr />
      <div className="flex flex-col gap-5">
        {[
          [
            "MagicPrompt",
            "Dec 2024",
            "Dec 2024",
            [
              "Create, Like, Filter, and Share all your favorite AI Prompts to a likeminded community.",
              "Discover trending AI prompts tailored to your interests through personalized recommendations.",
              "Collaborate with the community by remixing and enhancing existing prompts to unlock new creative possibilities.",
            ],
          ],
          [
            "Pathfinding Visualizer",
            "Dec 2023",
            "Dec 2023",
            [
              "App to Demonstrate Live Pathfinding Algorithms",
              "Designed a user-friendly interface for creating a customizing grid layouts",
              "Implemented popular pathfinding algorithms such as Dijkstra’s and A* with real time visualization",
            ],
          ],
          [
            "Bug Buddy",
            "Dec 2023",
            "Jan 2024",
            [
              "Live Bug Tracking and Documentation App",
              "Created a dynamic bug tracking interface where users can create, edit, delete, resolve, and comment on bug reports in real-time.",
              "Built robust user authentication and authorization for secure platform access",
              "Constructed dynamic filtering options, to search based on keywords, categories, or custom filters",
            ],
          ],
          [
            "Chat App Website",
            "Dec 2021",
            "Dec-2021",
            [
              "Chatting Platform with encryption, login, chat, saved Channels, emote support",
              "Utilized React and Stream",
              "Engineered seamless communication between multiple user and admin support",
            ],
          ],
          [
            "Payload Tracking",
            "Sep 2021",
            "Jan 2023",
            [
              "Implemented 6 Dof Scanner with Kalman Filter to detect payload dropoff",
              "Preparation to work on NASA competition operations with official team in future",
            ],
          ],
          [
            "Smart Mirror",
            "Sep 2021",
            "Dec 2021",
            [
              "Second place in NYU RAD Competition",
              "Designed a voice-activated hands-free smart mirror",
              "Rasberry Pi, Hardware Integration, UI design, software features",
              "Able to show news/weather/schedule, read off news and play Spotify",
            ],
          ],
          [
            "Top Down Shooter",
            "June 2015",
            "Dec 2018",
            [
              "Top-down, bullet hell, shooter",
              "Unique AI Enemies features: lasers, invisibility, fast-chasing, passive behavior",
              "Unity, C#, Particle Effects, Sprites/Maps, Animation, Logic",
            ],
          ],
        ].map(([title, start, end, points], i) => (
          <div
            className="flex flex-col border-b-2 border-b-black rounded-md p-4"
            key={i}
          >
            <div className="flex justify-between">
              <div className="uppercase text-xl font-semibold">{title}</div>
              <div className="text-lg font-semibold">
                {start} - {end}
              </div>
            </div>
            <div className="flex flex-col gap-1 text-md text-gray-500">
              {points.map((point, i) => (
                <div className="indent-1" key={i}>
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricProjects;
