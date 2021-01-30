INSERT INTO [dbo].[tbl_user]
           ([name]
           ,[username]
           ,[password]
           ,[email]
           ,[phone_number])
     VALUES
           (@name,
           @username,
           @password,
           @email,
           @phone_number)

SELECT SCOPE_IDENTITY() AS Id