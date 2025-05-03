import time
import random

# List of sentences
sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Python is a versatile programming language.",
    "Coding challenges are fun and educational.",
    "Always strive to improve your typing skills."
]

# Randomly select a sentence
sentence = random.choice(sentences)

print("Welcome to the Typing Speed Test!")
print("Type the following sentence as quickly and accurately as possible:\n")
print(f"\"{sentence}\"\n")

input("Press Enter when you're ready to start...")

# Start the timer
start_time = time.time()

# Get user input
typed_sentence = input("\nType here: ")

# End the timer
end_time = time.time()

# Calculate results
elapsed_time = end_time - start_time
word_count = len(sentence.split())
accuracy = sum(1 for a, b in zip(sentence, typed_sentence) if a == b) / len(sentence) * 100
wpm = (word_count / elapsed_time) * 60

# Display results
print("\nResults:")
print(f"Time taken: {elapsed_time:.2f} seconds")
print(f"Words per minute (WPM): {wpm:.2f}")
print(f"Accuracy: {accuracy:.2f}%")

if sentence != typed_sentence:
    print("\nMistakes detected. Try again to improve!")
