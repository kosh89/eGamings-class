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
        const tags = new Set();
        this.data.categories.forEach(category => {
          category.Tags.forEach (tag => {
            tags.add(tag);
          });
        });
        return tags;
      };

      showCatOnTag(tag) {
        return this.data.categories.filter(category => category.Tags.includes(tag)).map(category => category.Name.en);
      };

      showCatOnLang(lang) {
        return this.data.categories.map(category => category.Name[lang]);
      };

      showGamesWithDemo() {
        return this.data.games.filter(game => game.hasDemo).map(game => game);
      }

      showGamesOnMerchantId(id) {
        return this.data.games.filter(game => game.MerchantID === id.toString()).map(game => game);
      }
    }

    const myParse = new JSONParse(games);

    console.log(myParse.showCatTags());
    console.log(myParse.showCatOnTag('menu'));
    console.log(myParse.showCatOnLang('uk'));
    console.log(myParse.showGamesWithDemo());
    console.log(myParse.showGamesOnMerchantId(959));
  })





