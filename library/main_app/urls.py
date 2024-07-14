from django.contrib import admin
from django.urls import include, path

from main_app.views import (
    category_view,
    home_page,
    login_page,
    logout_page,
    product_view,
    signup_page,
    user_profile,
)

urlpatterns = [
    path("", home_page, name="home_page"),
    path("login/", login_page, name="login_page"),
    path("signup", signup_page, name="signup_page"),
    path("logout", logout_page, name="logout_page"),
    path("userp", user_profile, name="user"),
    path("category/<str:category>", category_view, name="category"),
    path("category/<str:category>/product/<int:pi>", product_view, name="product"),
]
