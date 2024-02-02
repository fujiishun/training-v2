# Userデータの作成
User.find_or_create_by!(account_id: 1) do |user|
  user.family_name = '山田'
  user.given_name = '太郎'
  user.family_name_kana = 'ヤマダ'
  user.given_name_kana = 'タロウ'
  user.description = 'テストデータです'
end

# Accountデータの作成
account = Account.find_or_initialize_by(email: 'yamada@example.com')
if account.new_record?
  account.password = 'Password123!'
  account.password_confirmation = 'Password123!'
  account.skip_confirmation!
  account.save!
end
