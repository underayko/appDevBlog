-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2024 at 01:48 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `blogID` int(50) NOT NULL,
  `blogTitle` varchar(900) NOT NULL,
  `blogDesc` varchar(9000) NOT NULL,
  `userID` int(50) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `blogImg` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`blogID`, `blogTitle`, `blogDesc`, `userID`, `timestamp`, `blogImg`) VALUES
(1, 'test new', 'testing desc', 1, '2024-07-21 17:44:42', ''),
(2, 'test 2', 'test desc2', 1, '2024-07-21 18:07:04', ''),
(3, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:50', ''),
(4, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:52', ''),
(5, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:53', ''),
(6, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:53', ''),
(7, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:53', ''),
(8, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:53', ''),
(9, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:53', ''),
(10, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:54', ''),
(11, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:54', ''),
(12, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:54', ''),
(13, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:54', ''),
(14, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:54', ''),
(15, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:55', ''),
(16, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:55', ''),
(17, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:55', ''),
(18, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:55', ''),
(19, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:55', ''),
(20, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:55', ''),
(21, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:56', ''),
(22, 'Application Development 1', 'We made a web application for our major subject. It\'s called UNFOLD. A portfolio maker/template for ', 2, '2024-07-22 01:31:56', ''),
(30, 'hey', 'heyheyhey', 2, '2024-07-23 13:22:04', ''),
(31, 'update', 'test test again', 2, '2024-07-23 13:41:53', ''),
(32, 'Ang ano ba', 'Basta', 8, '2024-07-23 23:04:13', ''),
(37, 'Latest Update', 'Test test lorem ipsum nye nye', 2, '2024-07-29 02:11:09', ''),
(39, 'Birthday Girl', 'More birthdays to come!', 9, '2024-07-29 04:27:11', ''),
(40, 'Testing Birthday Girl', 'Turned 31 today!', 9, '2024-07-29 04:27:35', ''),
(41, 'mama mo', 'haha\r\n', 10, '2024-07-29 22:17:43', ''),
(43, 'test', 'test', 10, '2024-07-30 00:44:48', ''),
(44, 'fsdf', 'fsdf', 10, '2024-07-30 00:54:02', '/files/projects/rio.jpg'),
(45, 'dasdasd', 'dasd', 10, '2024-07-30 00:55:43', '/files/projects/anime-girl-katana-tattoo-2k-wallpaper-uhdpaper.com-228@3@a.jpg'),
(46, 'dasdasd', 'dasdasd', 10, '2024-07-30 00:59:34', '/files/projects/naruto-762b09d.jpg'),
(47, 'dasdasd', 'dasdas', 10, '2024-07-30 01:05:35', '/files/projects/jollibee-fried-towel_2021-06-03_12-15-18_thumbnail.jpg'),
(48, 'sdsdasdasddasdasd', 'dasdasdasdasd', 10, '2024-07-30 01:07:45', '/files/projects/jollibee-fried-towel_2021-06-03_12-15-18_thumbnail.jpg'),
(49, 'dd', 'dd', 10, '2024-07-30 01:11:31', '/files/projects/HevAbiWebPoster.jpg'),
(50, 'rer', 'erererer', 10, '2024-07-30 02:57:49', '/files/projects/66a7e62d7d3f7_gojo.jpg'),
(51, 'erewrewr', 'ewrwerer', 10, '2024-07-30 03:04:12', '/files/projects/66a7e7ac257c6_hisoka.jpg'),
(52, 'tetsi', 'fdgdfgfgfdg', 9, '2024-07-31 19:38:04', '/files/projects/66aa221c53f04_myLove.jpg'),
(53, 'gsdgsdg', 'dsgsdgdsg', 11, '2024-07-31 20:14:22', '/files/projects/66aa2a9edcb54_galgadot.jpg'),
(54, 'sjghrsuygf', 'dtgjdfihg', 9, '2024-08-01 03:17:33', ''),
(55, 'TESTING NO STATUS TO NIS', 'TESTING LANG', 10, '2024-08-01 10:33:52', ''),
(56, 'TESTING LANG ANAK', 'NO STATUS VERSION', 12, '2024-08-01 10:37:21', ''),
(57, 'TESTING AGAIN ', 'PERO THIS TIME, WITH IMAGE NA', 12, '2024-08-01 10:37:49', '/files/projects/66aaf4fdb7cc5_kylie-kendall.jpeg'),
(59, 'erewr', 'ewrewrewr', 12, '2024-08-01 10:56:04', ''),
(60, 'eqrewr', 'erewr', 12, '2024-08-01 10:57:44', '/files/projects/66aaf9a8c931e_myLove.jpg'),
(61, 'ewrew', 'erewr', 12, '2024-08-01 10:58:22', '/files/projects/66aaf9ce965a9_galgadot.jpg'),
(62, 'Japanese', 'A week ago a friend invited a couple of other couples over for dinner. Eventually, the food (but not', 9, '2024-08-01 19:32:06', '/files/projects/66ab72364b9db_galCOVER.jpg'),
(64, 'tetstt', 'A week ago a friend invited a couple of other couples over for dinner. Eventually, the food (but not', 9, '2024-08-01 19:45:34', ''),
(65, 'Test ', '107\r\n\r\nThere are several ways you can do that:\r\n\r\nGo into node_modules/@angular/core/package.json an', 9, '2024-08-07 03:00:40', ''),
(66, 'wqeqe', '107\r\n\r\nThere are several ways you can do that:\r\n\r\nGo into node_modules/@angular/core/package.json an', 9, '2024-08-07 03:05:25', ''),
(67, 'erewrewr', '107\r\n\r\nThere are several ways you can do that:\r\n\r\nGo into node_modules/@angular/core/package.json an', 9, '2024-08-07 03:11:07', ''),
(68, 'test again', '107\r\n\r\nThere are several ways you can do that:\r\n\r\nGo into node_modules/@angular/core/package.json an', 9, '2024-08-07 03:14:07', ''),
(69, 'last test', '107\r\n\r\nThere are several ways you can do that:\r\n\r\nGo into node_modules/@angular/core/package.json an', 9, '2024-08-07 03:19:38', ''),
(70, 'A Week of Outfit', '“I’m over here writing romance, which is a genre that has been looked down on for dumb reasons, most', 11, '2024-08-12 09:43:27', '/files/projects/66b968bf03225_BlogImagePost.jpg'),
(71, 'How I Taught My Kids to Chat at Dinner', 'Dinner time has always been sacred in our household. It\'s the one time of day when we all gather, free from distractions, to share a meal and connect. But as the kids grew older, I noticed that our conversations became more sporadic, often interrupted by screens or the day\'s exhaustion. I wanted to bring back the lively dinner table chats we once had, so I set out on a mission to teach my kids the art of conversation.\r\n\r\nSetting the Stage\r\nThe first step was to create an environment that encouraged talking. I started by making the dinner table a screen-free zone. No phones, tablets, or TV—just us, our food, and the conversation. I explained to the kids why this time was important to me, and surprisingly, they understood. They were hesitant at first, but I reassured them that the goal wasn’t to force conversation but to make room for it.\r\n\r\nLeading by Example\r\nI knew that if I wanted my kids to engage in meaningful conversation, I had to model it myself. I started by asking open-ended questions—questions that couldn\'t be answered with a simple \"yes\" or \"no.\" Instead of \"How was your day?\" I asked, \"What was the most interesting thing that happened today?\" or \"Did anything make you laugh?\" These questions sparked more than just one-word answers; they invited stories, thoughts, and feelings.', 10, '2024-08-12 09:47:09', '/files/projects/66b9699d38ebd_kidsss.jpg'),
(72, 'The Mysterious Life of a Cat: A Day in the Paws of Whiskers', 'Ah, the life of a cat. To the untrained eye, it may seem like a lazy, uneventful existence. But for ', 9, '2024-08-12 09:51:58', '/files/projects/66b96abe42dd3_cats.jpg'),
(73, 'Paragraph', 'What this handout is about\r\nThis handout will help you understand how paragraphs are formed, how to develop stronger paragraphs, and how to completely and clearly express your ideas.\r\n\r\nWhat is a paragraph?\r\nParagraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main ide', 11, '2024-08-12 14:19:06', ''),
(74, 'P2', 'What this handout is about\r\nThis handout will help you understand how paragraphs are formed, how to develop stronger paragraphs, and how to completely and clearly express your ideas.\r\n\r\nWhat is a paragraph?\r\nParagraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main ide', 11, '2024-08-12 14:19:25', ''),
(75, 'P3', 'What is a paragraph?\r\nParagraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.\r\n\r\nHow do I decide what to put in a paragraph?\r\nBefore', 11, '2024-08-12 14:20:53', ''),
(77, 'ppp', 'What is a paragraph?\r\nParagraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.\r\n\r\nHow do I decide what to put in a paragraph?\r\nBefore you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.\r\n\r\nThe decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.\r\n\r\nSo, let’s suppose that you have done some brainstorming to develop your thesis. What else should you keep in mind as you begin to create paragraphs? Every paragraph in a paper should be:', 11, '2024-08-12 14:25:09', ''),
(78, 'My Family', '### The Importance of Family: A Pillar of Strength and Support\r\n\r\nFamily is often described as the cornerstone of our lives, the foundation upon which we build our identity, values, and worldview. From the earliest moments of our existence, family shapes us, offering love, guidance, and a sense of belonging that is unparalleled. In a world that is constantly changing, family remains a constant source of strength and comfort, providing the support system we all need to navigate life’s challenges.\r\n\r\n#### The Role of Family in Personal Development\r\n\r\nFamily plays a crucial role in our personal development, beginning from childhood and continuing throughout our lives. It is within the family unit that we learn our first lessons about trust, responsibility, empathy, and love. Parents, siblings, and extended family members contribute to the molding of our character, instilling in us the values and morals that will guide our actions as we grow older.\r\n\r\nIn a nurturing family environment, children learn to express themselves, to feel confident in their abilities, and to develop a strong sense of self-worth. Family members are often the first to celebrate our successes and provide comfort in times of failure, helping us build resilience and a positive self-image.\r\n\r\n#### Family as a Source of Unconditional Love and Support\r\n\r\nOne of the most significant aspects of family is the unconditional love that family members have for one another. Unlike most other relationships, where conditions or expectations may apply, the love within a family is often given freely and without reservation. This kind of love forms the bedrock of our emotional well-being, offering a safe space where we can be ourselves without fear of judgment.\r\n\r\nFamily members are often the first people we turn to in times of need. Whether we are facing a personal crisis, struggling with health issues, or simply feeling overwhelmed by life, our families are there to provide the support we need. This support comes in many forms—emotional, financial, and practical—and it helps us cope with the stresses of life more effectively.\r\n\r\n#### The Evolving Definition of Family\r\n\r\nThe traditional definition of family has evolved over time. While the nuclear family—consisting of parents and their children—remains prevalent, there is now greater recognition and acceptance of diverse family structures. Single-parent families, blended families, extended families, and families formed through adoption or foster care are all valued for the unique strengths and dynamics they bring.\r\n\r\nIn addition to these more conventional forms of family, the concept of \"chosen family\" has gained prominence. Chosen family refers to the close-knit group of friends who provide the same love, support, and sense of belonging as a traditional family. For many people, especially those who may be estranged from their biological families, chosen family offers a vital sense of community and connection.\r\n\r\n#### Family Traditions and Cultural Heritage\r\n\r\nFamily traditions are another essential aspect of family life. These rituals, whether they are simple daily routines or elaborate holiday celebrations, help to create a sense of continuity and shared identity among family members. Through these traditions, cultural heritage is passed down from one generation to the next, keeping alive the customs, languages, and values that define our collective identity.\r\n\r\nFor many, these traditions serve as a link to their ancestors and their history, providing a sense of belonging to something greater than themselves. They remind us of where we come from and help us understand our place in the world.\r\n\r\n#### The Challenges Families Face\r\n\r\nDespite the many benefits of family, it is not without its challenges. Conflicts can arise due to differences in personalities, values, or life choices. External pressures, such as financial difficulties, health issues, or societal expectations, can strain family relationships. However, it is often through overcoming these challenges that families grow stronger, learning to communicate better, to compromise, and to support one another more effectively.\r\n\r\n#### Conclusion: Cherishing Our Families\r\n\r\nIn conclusion, family is an irreplaceable part of our lives. It is where we find love, support, and the strength to face the world. While no family is perfect, the bonds we share with our family members are among the most meaningful and enduring relationships we will ever have. As we navigate life’s ups and downs, it is essential to cherish our families, to nurture these relationships, and to recognize the profound impact they have on our lives.\r\n\r\nFamily is more than just a group of people related by blood; it is a network of love, trust, and support that shapes who we are and who we aspire to be.', 9, '2024-08-12 14:30:46', '/files/projects/66b9ac16680d3_fampic.jpg'),
(79, 'Remembering Orin: A Tribute to My Beloved White Cat', 'Orin was more than just a pet; he was a cherished member of our family. With his snowy white fur and gentle nature, he had a way of making everyone around him feel at peace. His playful antics brought endless joy to our home, and his quiet companionship was a comfort in times of need.\r\n\r\nBut our time with Orin was tragically cut short. Despite our best efforts, Orin fell ill with Giardia and Parvo, two ruthless diseases that took him from us far too soon. It was heartbreaking to see our vibrant, loving cat weakened by illness, and the house has felt emptier since his passing.\r\n\r\nOrin’s loss has been a painful reminder of how fragile life can be. But even in his short time with us, he left a lasting impact. We remember the way he would curl up next to us on the couch, his purring a soft lullaby that could ease any worry. We remember the way his eyes would light up at the sight of his favorite toy, or how he would nuzzle our faces when he wanted to be close.\r\n\r\nThough Orin is no longer with us, his memory lives on in our hearts. He taught us to cherish the small, quiet moments and to hold our loved ones a little closer. Orin may be gone, but the love he gave us will remain forever.', 11, '2024-08-12 14:43:40', '/files/projects/66b9af1c51d75_whiteCat.jpg'),
(80, 'I LOVE CCS!', 'Sana ipasa na ako ni sir loudel hehehe', 11, '2024-08-12 14:48:16', '/files/projects/66b9b02ff3932_ccs.png'),
(81, 'My Circle of Friends', 'I love them!\r\n', 11, '2024-08-12 14:48:53', '/files/projects/66b9b0555f621_peer.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `commentID` int(255) NOT NULL,
  `userID` int(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `blogID` int(255) NOT NULL,
  `author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`commentID`, `userID`, `comment`, `blogID`, `author`) VALUES
(1, 0, 'sdsdsd', 64, ''),
(2, 0, 'dfdfdfdf', 64, ''),
(3, 0, 'twtwtw', 64, 'rtdbntghdtgn'),
(4, 0, 'twtwtw', 64, 'rtdbntghdtgn'),
(5, 0, 'wowowowo', 64, 'gihfdifuhgudfisog'),
(6, 0, 'dsfr', 64, 'dfsdf'),
(7, 0, 'rtgfgfgfdgfdgfg', 64, 'fdgfdgfdgfdg'),
(8, 0, 'twerk', 64, 'dfsdfdf'),
(9, 0, 'fdfgfg', 64, 'fdgfdgfdgfg'),
(10, 0, 'rtretret', 64, 'fgdfggfd'),
(11, 9, 'fgfgfg', 64, 'ry hhghvgh rdgdf'),
(12, 9, 'dfgfdg', 64, 'fdgdfgfdg'),
(13, 9, 'kurt', 64, 'super galing'),
(14, 9, 'nis', 64, 'super lang'),
(15, 9, 'dfdfd', 62, 'sdfsdfdf'),
(16, 9, 'nisu', 64, 'ausihdiausfhd'),
(17, 9, 'huhu', 69, 'ijjiujj'),
(18, 9, 'Nice Pic', 72, 'Nice cat'),
(19, 9, 'Stephany', 72, 'GALO'),
(20, 10, 'Nis', 71, 'Super cute naman ng kids mo'),
(21, 10, 'Iona', 71, 'Pangit ng anak mo'),
(22, 11, 'Nis', 79, 'Super cute naman ng pusa ko huhu'),
(23, 11, 'Kurt', 79, 'I miss you, Orin!'),
(24, 11, 'Stephany', 79, 'love you orin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `hobbies` varchar(255) DEFAULT NULL,
  `favoriteColor` varchar(7) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `cover` varchar(255) NOT NULL,
  `pfp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `firstname`, `lastname`, `email`, `password`, `username`, `age`, `birthdate`, `hobbies`, `favoriteColor`, `nationality`, `height`, `weight`, `phoneNumber`, `cover`, `pfp`) VALUES
(7, 'Eunice', 'Corpuz', 'eunice@gmail.com', '$2y$10$BQOUhp5Vq07iTYvr253hU.OHALmYHlDvIxJ9aVspOSga088SFIySu', 'nisu', 20, '2003-10-29', 'Mobile Games', NULL, 'Filipino', 165, 53, '09687250287', '', ''),
(8, 'Kurt', 'Sapo', 'kurt@gmail.com', '$2y$10$J4DkE3jm78ha.bfjQ//iIOZTkUNiPcECGrAKLz33HRleVuk5pNhty', 'kurty', 19, '2004-08-18', 'Mang ano', NULL, 'Muslim', 123, 14, '09786575234', '', ''),
(9, 'Alex', 'Corpuz', 'alex@gmail.com', '$2y$10$l97tPgsD0TsA9XSWxXmE5OIauGJ0SzKiJAWuQ7x7Q4CkMTAcJLmFy', 'alex', 31, '1999-07-29', 'Work', NULL, 'Filipino', 165, 60, '09687456234', '/files/projects/66ab70c365545-galCOVER.jpg', '/files/projects/66a803d0e7b1b-galgadot.jpg'),
(10, 'kurt', 'sapo', 'ruzz@gmail.com', '$2y$10$pvQWEJ6yg1u.LuE1C7ujKOuTbuO5yeOfZxkXce1YxpCPT438.Ew56', 'kurt', 19, '2024-07-25', 'Coding', NULL, 'Filipino', 6, 60, '0942342432', '/files/projects/66a7c1a65c659-squirtle.jpg', '/files/projects/66a7c2137b374-jollibee-fried-towel_2021-06-03_12-15-18_thumbnail.jpg'),
(11, 'Eunice', 'Corpuz', 'eunice@gmail.com', '$2y$10$u3/.WVpK.LbblrJb14ohP.hf0j02Li/NNV7f9yrHaSnvTwS58HoMG', 'nis', 20, '2003-10-29', 'Mobile Legends', NULL, 'Filipino', 164, 53, '09687250287', '/files/projects/66aa2deec580b-kylie-kendall.jpeg', '/files/projects/66aa2de56c21a-kylie.jfif'),
(12, 'Wilma', 'Corpuz', 'wilma@gmail.com', '$2y$10$wFzu6gJ5ResSK7fra92r6es9lhNz9vllkjX9b6W8kkTq833zDtzii', 'wilma', 53, '1977-10-06', 'Candy Crush', NULL, 'American', 34, 60, '0983463764', '/files/projects/66aaf712d9ecd-kylie.jfif', '/files/projects/66aaf70809e87-mamaPic.jfif');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`blogID`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blogID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `commentID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
