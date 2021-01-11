

var contentDivs = document.getElementsByClassName('directory-content');

contentDivs.forEach(indPagerFunction);

function indPagerFunction(item, index) {

    var Imtech = {};


    Imtech.Pager = function() {

        var contentId = "#" + item.id;
        var pagingId = "#control-" + contentId;

        this.paragraphsPerPage = 3;
        this.currentPage = 1;
        this.pagingControlsContainer = pagingId;
        this.pagingContainerPath = contentId;
        this.numPages = function() {

            var numPages = 0;

            if (this.paragraphs != null && this.paragraphsPerPage != null) {
                numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
            }
            return numPages;
        };

        this.showPage = function(page) {
            this.currentPage = page;
            var html = '';
            this.paragraphs.slice((page-1) * this.paragraphsPerPage,
                ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
                html += '<div>' + $(this).html() + '</div>';
            });

            $(this.pagingContainerPath).html(html);

            renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());

        }

        var renderControls = function(container, currentPage, numPages) {
            var pagingControls = 'Page: <ul>';

            for (var i = 1; i <= numPages; i++) {
                if (i != currentPage) {
                    pagingControls += '<li><a href="#" onclick="pager.showPage(' + i + '); return false;">' + i + '</a></li>';
                } else {
                    pagingControls += '<li class="current">' + i + '</li>';
                }
            }

            pagingControls += '</ul>';

            $(container).html(pagingControls);

        }

    }
} // end endPagerFunction
