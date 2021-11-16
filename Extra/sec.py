from cryptography.fernet import Fernet

key = input("Enter key: ")

cipher = Fernet(key)

filename = './txt-files/logs.txt'

with open(filename, 'rb') as f:
    e_file = f.read()

encryped_file = cipher.encrypt(e_file)

with open(filename + "encrypted", 'wb') as ef:
    ef.write(encrypted_file)
