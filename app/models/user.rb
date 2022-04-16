class User < ApplicationRecord
  has_secure_password

  validates :name, presence: { message: '必須ですー' }, uniqueness: true, length: { minimum: 6, message: "%{count}文字以上" }
  validates :email, presence: true
  validates :password_digest, presence: true
end