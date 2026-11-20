# Compila el CV en cada idioma y lo copia a public/cv/ para que Vite lo sirva.
#   make         -> compila, copia y pasa la comprobación ATS
#   make check   -> solo la comprobación (texto extraíble y fuentes con Unicode)
#   make clean   -> borra auxiliares

LANGS := en es
OUT   := ../public/cv
PDFS  := $(LANGS:%=cv-%.pdf)

all: $(PDFS:%=$(OUT)/%) check

cv-%.pdf: cv-%.tex resume.cls
	latexmk -pdf -interaction=nonstopmode -halt-on-error -quiet $<

$(OUT)/%.pdf: %.pdf
	@mkdir -p $(OUT)
	cp $< $@

# Falla si el PDF no tiene 1 página, si alguna fuente no está embebida o no
# tiene mapa Unicode, o si no se puede extraer el nombre como texto plano.
check: $(PDFS)
	@for f in $(PDFS); do \
	  pages=$$(pdfinfo $$f | awk '/^Pages:/{print $$2}'); \
	  [ "$$pages" = 1 ] || { echo "$$f: $$pages páginas (debe ser 1)"; exit 1; }; \
	  pdffonts $$f | awk 'NR>2 && ($$(NF-4)!="yes" || $$(NF-2)!="yes"){bad=1} END{exit bad}' \
	    || { echo "$$f: fuente sin embeber o sin ToUnicode"; pdffonts $$f; exit 1; }; \
	  pdftotext -layout $$f - | grep -q 'Miguel Cazorla Zamora' \
	    || { echo "$$f: el texto no se extrae correctamente"; exit 1; }; \
	  echo "$$f: OK"; \
	done

clean:
	latexmk -C $(LANGS:%=cv-%.tex)

.PHONY: all check clean
