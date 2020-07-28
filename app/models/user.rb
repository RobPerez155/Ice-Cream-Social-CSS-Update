class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         has_many :reviews
  validates :email, presence: true
  validates :username, presence: true
  validates :password, presence: true, length: { minimum: 6 }
end
