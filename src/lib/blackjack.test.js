// import { handValue, determineWinner } from "./blackjack";

// describe("handValue", () => {

//   test("calculates number cards correctly", () => {
//     const hand = [
//       { suit: "♠", value: "5" },
//       { suit: "♥", value: "9" }
//     ];
//     expect(handValue(hand)).toBe(14);
//   });

//   test("face cards count as 10", () => {
//     const hand = [
//       { suit: "♠", value: "K" },
//       { suit: "♥", value: "Q" }
//     ];
//     expect(handValue(hand)).toBe(20);
//   });

//   test("ace counts as 11 when safe", () => {
//     const hand = [
//       { suit: "♠", value: "A" },
//       { suit: "♥", value: "9" }
//     ];
//     expect(handValue(hand)).toBe(20);
//   });

//   test("ace counts as 1 when needed", () => {
//     const hand = [
//       { suit: "♠", value: "A" },
//       { suit: "♥", value: "9" },
//       { suit: "♦", value: "5" }
//     ];
//     expect(handValue(hand)).toBe(15);
//   });

// });

// describe("determineWinner", () => {

//   test("player wins with higher score", () => {
//     const player = [
//       { suit: "♠", value: "10" },
//       { suit: "♥", value: "9" }
//     ];
//     const dealer = [
//       { suit: "♠", value: "8" },
//       { suit: "♥", value: "9" }
//     ];
//     expect(determineWinner(player, dealer)).toBe("player");
//   });

//   test("dealer wins if player busts", () => {
//     const player = [
//       { suit: "♠", value: "10" },
//       { suit: "♥", value: "9" },
//       { suit: "♦", value: "5" }
//     ];
//     const dealer = [
//       { suit: "♠", value: "8" },
//       { suit: "♥", value: "9" }
//     ];
//     expect(determineWinner(player, dealer)).toBe("dealer");
//   });

//   test("push when equal score", () => {
//     const player = [
//       { suit: "♠", value: "10" },
//       { suit: "♥", value: "9" }
//     ];
//     const dealer = [
//       { suit: "♠", value: "10" },
//       { suit: "♥", value: "9" }
//     ];
//     expect(determineWinner(player, dealer)).toBe("push");
//   });

// });



import {
  createDeck,
  handValue,
  determineWinner,
} from "./blackjack";

describe("Deck creation", () => {
  test("creates 52 cards", () => {
    const deck = createDeck();
    expect(deck.length).toBe(52);
  });

  test("deck contains Ace of Spades", () => {
    const deck = createDeck();
    const aceSpades = deck.find(
      card => card.value === "A" && card.suit === "♠"
    );
    expect(aceSpades).toBeDefined();
  });
});

describe("Hand value calculation", () => {
  test("calculates numeric cards correctly", () => {
    const hand = [
      { suit: "♠", value: "5" },
      { suit: "♥", value: "9" }
    ];
    expect(handValue(hand)).toBe(14);
  });

  test("face cards count as 10", () => {
    const hand = [
      { suit: "♠", value: "K" },
      { suit: "♥", value: "Q" }
    ];
    expect(handValue(hand)).toBe(20);
  });

  test("Ace counts as 11 when safe", () => {
    const hand = [
      { suit: "♠", value: "A" },
      { suit: "♥", value: "8" }
    ];
    expect(handValue(hand)).toBe(19);
  });

  test("Ace converts to 1 if bust", () => {
    const hand = [
      { suit: "♠", value: "A" },
      { suit: "♥", value: "9" },
      { suit: "♦", value: "5" }
    ];
    expect(handValue(hand)).toBe(15);
  });

  test("multiple aces handled correctly", () => {
    const hand = [
      { suit: "♠", value: "A" },
      { suit: "♥", value: "A" },
      { suit: "♦", value: "9" }
    ];
    expect(handValue(hand)).toBe(21);
  });
});

describe("Winner determination", () => {
  test("player wins with higher score", () => {
    const player = [
      { suit: "♠", value: "10" },
      { suit: "♥", value: "9" }
    ];
    const dealer = [
      { suit: "♠", value: "8" },
      { suit: "♥", value: "9" }
    ];
    expect(determineWinner(player, dealer)).toBe("player");
  });

  test("dealer wins if player busts", () => {
    const player = [
      { suit: "♠", value: "10" },
      { suit: "♥", value: "9" },
      { suit: "♦", value: "5" }
    ];
    const dealer = [
      { suit: "♠", value: "8" },
      { suit: "♥", value: "9" }
    ];
    expect(determineWinner(player, dealer)).toBe("dealer");
  });

  test("dealer bust gives player win", () => {
    const player = [
      { suit: "♠", value: "10" },
      { suit: "♥", value: "8" }
    ];
    const dealer = [
      { suit: "♠", value: "10" },
      { suit: "♥", value: "9" },
      { suit: "♦", value: "5" }
    ];
    expect(determineWinner(player, dealer)).toBe("player");
  });

  test("push when equal score", () => {
    const player = [
      { suit: "♠", value: "10" },
      { suit: "♥", value: "9" }
    ];
    const dealer = [
      { suit: "♠", value: "10" },
      { suit: "♥", value: "9" }
    ];
    expect(determineWinner(player, dealer)).toBe("push");
  });
});
