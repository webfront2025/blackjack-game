# Blackjack UML Class Diagram
+----------------+
|      Card      |
+----------------+
| - suit: string |
| - value: string|
+----------------+
|                |
+----------------+

          ^
          |
          |
+----------------+
|      Deck      |
+----------------+
| - cards: Card[]|
+----------------+
| + shuffle()    |
| + createDeck() |
| + deal(): Card |
+----------------+

          ^
          |
          |
+----------------+        +----------------+
|     Player     |        |     Dealer     |
+----------------+        +----------------+
| - hand: Card[] |        | - hand: Card[] |
+----------------+        +----------------+
| + hit(deck)    |        | + play(deck)   |
| + handValue()  |        | + handValue()  |
+----------------+        +----------------+

          ^
          |
          |
+----------------+
|      Game      |
+----------------+
| - deck: Deck   |
| - player: Player|
| - dealer: Dealer|
| - status: string|
| - gameOver: bool|
+----------------+
| + deal()       |
| + hit()        |
| + stand()      |
| + restart()    |
| + determineWinner(): string |
+----------------+

          ^
          |
          |
+----------------+
|      Home      |
+----------------+
| - deck: Deck[] |
| - player: Card[]|
| - dealer: Card[]|
| - status: string|
| - gameOver: bool|
+----------------+
| + deal()       |
| + hit()        |
| + stand()      |
| + restart()    |
+----------------+

+----------------+
|    Section     |
+----------------+
| - title: string|
| - hand: Card[] |
+----------------+
| (renders Cards)|
+----------------+

+----------------+
|     Button     |
+----------------+
| - children    |
| - onClick     |
+----------------+
| (UI Button)   |
+----------------+