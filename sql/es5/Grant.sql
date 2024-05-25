-- Step 1: Create the user (if it does not already exist)
CREATE USER IF NOT EXISTS 'martin'@'localhost' IDENTIFIED BY 'your_password';

-- Step 2: Grant SELECT and UPDATE permissions on the Books table
GRANT SELECT, UPDATE ON bookstore.Books TO 'martin'@'localhost';

-- Step 3: Revoke DELETE permissions on the Books table just in case they were previously granted
REVOKE DELETE ON bookstore.Books FROM 'martin'@'localhost';