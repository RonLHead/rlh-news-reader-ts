![News Reader main page](https://user-images.githubusercontent.com/92322028/183111702-1b2e0e33-28c0-4924-8186-c7d5f9ee86a9.JPG)

## NYT News Reader serves as a platform for readers to access a current list of NYT articles. From this app, a reader can view article details, such as the its abstract and byline, and obtain a link to read the full story on the New York Time's website. This news reader also allows readers to filter stories based on subcategory.

### This application was created to submit as a Mod 4 take-home project for Turing School of Software & Design. 
You can see it in action by visiting the [NYT News Reader](https://rlh-nyt-news-reader.surge.sh/) or on your local computer by following the instructions below. <br><br>

### Useful Links!
- [Deployed site](https://rlh-nyt-news-reader.surge.sh/)
- [Wireframes on Figma](https://www.figma.com/file/USpu8q4tWvsvmnaCxpUelQ/rlh-news-reader-wireframe?node-id=0%3A1)
- [Project specs](https://mod4.turing.edu/projects/take_home/take_home_fe)
- [New York Times API Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)

* * *

## Goals

- Simulate a take-home task one mighty receive during an interview process
- Create a news reader application that pulls articles from the [NYT Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)
- At minimum, the app should show:
  - A list of articles
  - A “detailed” view for each article
  - Articles in the list must link to the detailed article view
  - Filter feature
- Demonstrate a strong understanding of React JS/Front End best practices
- Prioritize project for MVP

## How to Run

1. Clone the repo down to your machine
2. Open the root directory and rum `npm i` to install dependencies
3. Run `npm start` to initialize the webpage
4. Open the site by copying and pasting the server location `http://localhost:3000` in you address bar

* * *

## Development Process

### As a visual learner with an associates in graphic design, I operate best when I can conceptualize how the project would look and operate. My News Reader began life as Figma wireframes to provide direction on how I want to structure my code and app functionality.

![My News Reader wireframes](https://user-images.githubusercontent.com/92322028/172990875-48993749-a3c6-4125-8260-f769c5670b51.JPG)

* Please note I originally envisioned a bookmarking feature be included with this project. This was abandoned in order to meet the constraints of the MVP.

### Next came the component tree structure:

## Project Tree
* [App](src/components/App)<br>
--[Nav](src/components/Nav)<br>
--[Stories](src/components/Stories)<br>
  ---[TopStory](src/components/TopStory) ---[SingleStory](src/components/SingleStory) ---[Error](src/components/Error)  ---[GrayLine](src/components/GrayLine)<br>
    -----[TopStoryDetails](src/components/TopStoryDetails)

* * *

## Features

**View Articles List:**
On page load the user will see all the articles in the main New York Times subsection, which they can scroll up and down to view.

![news-reader-articles-list](https://user-images.githubusercontent.com/92322028/183112602-6a3b9118-c3f8-4634-a43a-d111540263eb.gif)

**View Article Details:**
The user can click on an article, and it will route them to a detailed view of the story.

![news-reader-article-details-view](https://user-images.githubusercontent.com/92322028/183113136-6b381b5a-7986-4359-85ec-4df8bef7f394.gif)

**Go to NYT Article:**
The user can click on various links to direct themselves to the actual New York Times article.

![news-reader-go-to-nyt](https://user-images.githubusercontent.com/92322028/183113793-8c239902-4f2b-454b-9d4f-d23d005c061f.gif)

**Go Back:**
From the article details view, the user can click the Go Back button in the nav bar to route back to the main page.

![news-reader-go-back](https://user-images.githubusercontent.com/92322028/183114676-1863e928-93ed-4a7a-9497-696de70d7a31.gif)

**Filter by Subsection:**
The user can use the filter option to display articles based on the various subsections provided by NYT.

![news-reader-filter](https://user-images.githubusercontent.com/92322028/183115275-cdd62901-7492-44de-8d7f-024098b7bd22.gif)

* * * 

## Technologies Used

- TypeScript
- JavaScript
- React.js
- React Hooks
- React Router 6
- HTML
- CSS
- Surge
- V.S. Code


### Future Features

- Ability to bookmark articles
- View bookmarked articles
- Remove bookmarked articles
- End-to-End testing with Cypress
- Testing automation with CircleCI

# Contributor
💻 Ron L Head |  [Github](https://github.com/RonLHead)  |  [LinkedIn](https://www.linkedin.com/in/ronlhead/)

