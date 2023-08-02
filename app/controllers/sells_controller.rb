class SellsController < ApplicationController
    before_action :set_book, only: %i[create]
    def new 
        @sell = Sell.new
    end

    def create
        @sell = @book.sells.new set_params
        if @sell.save
            respond_to do |format|
                format.turbo_stream
            end
        else
            render :new, status: :unprocessable_entity
        end
    end

    private
        def set_book
            @book = Book.find(params[:sell][:book_id])
        end

        def set_params
            params.require(:sell).permit(:quantity, :day)
        end
end
