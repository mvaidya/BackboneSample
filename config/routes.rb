BackboneSample::Application.routes.draw do
  resources :products

  root :to => "products#index"
  match "/" => "products#index", :as=>:home

end
