SELECT [Id]
      ,[name]
      ,[username]
      ,[password]
      ,[email]
      ,[phone_number]
  FROM [dbo].[tbl_user]
  WHERE [Id] = @Id