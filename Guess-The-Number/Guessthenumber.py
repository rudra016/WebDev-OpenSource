# Import the random module to generate random numbers
import random

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)

# Initialize the number of tries
attempts = 0

print("Welcome to the Guessing Game!")
print("I'm thinking of a number between 1 and 100. Try to guess it!")

while True:
    try:
        # Get the player's guess
        guess = int(input("Enter your guess: "))
        attempts += 1
        
        # Check if the guess is correct
        if guess == secret_number:
            print(f"Congratulations! You guessed the number {secret_number} in {attempts} attempts.")
            break
        elif guess < secret_number:
            print("Try a higher number.")
        else:
            print("Try a lower number.")
    except ValueError:
        print("Please enter a valid number.")

