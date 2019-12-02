fetch('./games/games.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    const games = data;

    class JSONParse {
      constructor(data) {
        this.data = data;
      }

      showCatTags() {
        const tags = [];
        this.data.categories.forEach(category => {
          category.Tags.forEach(tag => {
            if (!tags.includes(tag)) {
              tags.push(tag);
            }
          });
        });
        return tags;
      }

      showCatOnTag(tag) {
        const categories = [];
        this.data.categories.forEach(category => {
          if (category.Tags.includes(tag)) {
            categories.push(category.Name.en);
          }
        });
        return categories;
      }

      showCatOnLang(lang) {
        const categories = [];
        this.data.categories.forEach(category => {
          categories.push(category.Name[lang]);
        });
        return categories;
      }

      showGamesWithDemo() {
        const games = [];
        this.data.games.forEach(game => {
          if (game.hasDemo) {
            games.push(game.Name.en);
          }
        });
        return games;
      }

      showGamesOnMerchantId(id) {
        const games = [];
        id = id.toString();
        this.data.games.forEach(game => {
          if (game.MerchantID === id) {
            games.push(game.Name.en);
          }
        });
        return games;
      }
    }

    const myParse = new JSONParse(games);

    console.log(myParse.showCatTags());
    console.log(myParse.showCatOnTag('menu'));
    console.log(myParse.showCatOnLang('uk'));
    console.log(myParse.showGamesWithDemo());
    console.log(myParse.showGamesOnMerchantId(959));
  })





