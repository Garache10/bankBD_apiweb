UPDATE [dbo].[tbl_user]
SET [name] = @name
    ,[username] = @username
    ,[password] = @password
    ,[email] = @email
    ,[phone_number] = @phone_number
WHERE [Id] = @Id

SELECT [Id]
      ,[name]
      ,[username]
      ,[password]
      ,[email]
      ,[phone_number]
  FROM [dbo].[tbl_user] 
  WHERE [Id] = @Id
