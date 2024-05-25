-- Start a transaction
BEGIN TRANSACTION;

-- Delete the book with BookID = 103
DELETE FROM Books
WHERE BookID = 103;

-- Rollback the transaction to revert the change
ROLLBACK;