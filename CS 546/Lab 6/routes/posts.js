const express = require("express");
const router = express.Router();

router.get("/story", async (req, res) => {
  try {
    
    const storyData = {
      "storyTitle": "The trip of life",
      "story": "That time when we climbed a mountain and almost killed by a bear. During the summer I received a called with one of my friends and he tells me about the trip to Maine and Mount Washington. Me being a thrill seeker I was already on it. Boy little did I know about the things that would happen on the trip. \nThe day was warm about 25 degrees Celsius (85 degree F). We were all prepped to climb. In for 30 minutes a guy from our group, who never climbed. Looking at him I thought the only thing he has climbs were the stairs. He asks how long it? \"about 5 hours\" another dude said. That face of horror was hilarious, I shall never forget. 15 minutes Later, he quit and went back. About 4 hours into the climb. I was exhausted I could not feel my legs. I was leading in the group so I rested for 5 minutes. This is where everything gets dark (well brown). I start to see a brown furry thing about 100 ft away. I could see it well. A guy comes behind I point at this furry thing and ask him if can see what is it? His faced turned as he saw something like a bear(it was a bear). Now I am exhausted to the point I could not climb anymore. My heart sank. I started to sweat and screaming \"runnnnnn\"." 
    }
    res.json(storyData);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/about", async (req, res) => {
  try {
    const storyData = {
      "name": "Atiq Patel",
      "cwid": "10432883",
      "biography": "I am a Magician who likes to code.",
      "favoriteShows": ["How I Met Your Mother", "South Park", "Samurai Jack", "Pokemon"],
      "hobbies": ["Magician", "Socializing", "Sarcasm"]
    }
    res.json(storyData);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/education", async (req, res) => {
  try {
    
    const storyData =[
      {
        "schoolName": "Our Lady of Good Counsel High School",
        "degree": "First School Degree",
        "favoriteClass": "Drawing",
        "favoriteMemory": "10th grade Farewell"
      },
      {
        "schoolName": "Guru Nanak Khalsa College",
        "degree": "Junior College",
        "favoriteClass": "Physics",
        "favoriteMemory": "Bunking classes to eat frankie rolls"
      },
      {
        "schoolName": "K. J Somaiya Institute of Engineering and Information Technology",
        "degree": "Computer Science Undergraduate Degree",
        "favoriteClass": "Not Algorithms",
        "favoriteMemory": "Bunking lectures to eat food"
      }
  ]
    res.json(storyData);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
