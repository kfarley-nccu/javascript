var Imtech = {};

Imtech.Pager = function(pagerName) {

    this.paragraphsPerPage = 3;
    this.currentPage = 1;
    this.pagingControlsContainer = '#pagingControls';
    this.pagingContainerPath = '#content';
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
            html += '<div class="directory-override">' + $(this).html() + '</div>';
        });

        $(this.pagingContainerPath).html(html);

       if (this.numPages() >= 2) {
            renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
        }

    }

    var renderControls = function(container, currentPage, numPages) {
        var pagingControls = 'Page: <ul>';
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls += '<li><a href="#" onclick="' + pagerName + '.showPage(' + i + '); return false;">' + i + '</a></li>';
            } else {
                pagingControls += '<li class="current">' + i + '</li>';
            }
        }

        pagingControls += '</ul>';

        $(container).html(pagingControls);

    }

}
