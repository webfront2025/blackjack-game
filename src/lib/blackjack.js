export const suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
//                  spade: "\u2660", heart: "\u2665",Diamond: "\u2666",Club: "\u2663"
export const values = [
  "A", "2", "3", "4", "5", "6",
  "7", "8", "9", "10", "J", "Q", "K"
];

export function createDeck() {
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }

  return deck;
}

// Shuffle deck   
//             ***** Shuffle betyder at korten blandes tilfældigt./ the cards are shuffled randomly.
export function shuffle(deck) {
  return deck.sort(() => Math.random() - 0.5);
}

// Calculate hand value
export function handValue(hand) {
  let sum = 0;
  let aces = 0;
  hand.forEach(card => {
    if (["J", "Q", "K"].includes(card.value)) sum += 10;
    else if (card.value === "A") {
      sum += 11;
      aces += 1;
    } else sum += parseInt(card.value);
  });
  while (sum > 21 && aces > 0) {
    sum -= 10; // Ace counts as 1 instead of 11
    aces -= 1;
  }
  return sum;
}

// Determine winner
export function determineWinner(playerHand, dealerHand) {
  const playerScore = handValue(playerHand);
  const dealerScore = handValue(dealerHand);
// Bust**** betyder at man går over 21 og taber. / lose
  if (playerScore > 21) return "dealer";
  if (dealerScore > 21) return "player";
  if (playerScore > dealerScore) return "player";
  if (dealerScore > playerScore) return "dealer";
    // Push betyder uafgjort. / a draw  
    // If   playerScore === dealerScore  => none of them busted then "Push"
  return "push";
}